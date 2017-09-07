<#import "template.ftl" as layout>
<@layout.mainLayout active='social' bodyClass='social'; section>

    <div class="page-title">
        <h2>${msg("federatedIdentitiesHtmlTitle")}</h2>
    </div>

    <hr/>

    <form action="${url.passwordUrl}" class="input-detail " method="post">
        <#list federatedIdentity.identities as identity>
            <div class="idenity-container">
                <div class="input-lead ${identity.providerId!}">
                    <i id="input-link-${identity.providerId!}-icon" class="fa fa-${identity.providerId!}" aria-hidden="true"></i>
                    <span>${identity.displayName!}</span>
                </div>

                <div class="add-identity">
                    <input disabled="true" id="add-${identity.providerId!}" placeholder="${identity.displayName!}" value="${identity.userName!}"/>
                    <i  id="input-add-${identity.providerId!}-icon" class="fa fa-fw fa-address-card-o" aria-hidden="true"></i>
                </div>

                <div class="input-submit input-inline input">
                    <#if identity.connected>
                        <#if federatedIdentity.removeLinkPossible>
                            <a href="${identity.actionUrl}" type="submit" id="remove-${identity.providerId!}" class="cancel"><span>Remove</span><i id="input-link-${identity.providerId!}-icon" class="fa fa-trash" aria-hidden="true"></i></a>
                        </#if>
                    <#else>
                        <a href="${identity.actionUrl}" type="submit" id="link-${identity.providerId!}" class="confirm"><span>Add</span><i id="input-link-${identity.providerId!}-icon" class="fa fa-plus-circle" aria-hidden="true"></i></a>
                    </#if>
                </div>
            </div>

        </#list>
    </form>

</@layout.mainLayout>