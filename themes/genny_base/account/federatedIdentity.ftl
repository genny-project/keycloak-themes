<#import "template.ftl" as layout>
<@layout.mainLayout active='social' bodyClass='social'; section>

    <div class="page-title">
        <h2>${msg("federatedIdentitiesHtmlTitle")}</h2>
    </div>

    <hr/>

    <form action="${url.passwordUrl}" class="input-detail input-wrap" method="post">
        <#list federatedIdentity.identities as identity>

                <div class="add-identity">
                    <input disabled="true" id="add-${identity.providerId!}" placeholder="${identity.displayName!}" value="${identity.userName!}"/>
                    <i  id="input-add-${identity.providerId!}-icon" class="fa fa-fw fa-${identity.providerId!}" aria-hidden="true"></i>
                </div>

                <div class="input-submit input-inline">
                    <#if identity.connected>
                        <#if federatedIdentity.removeLinkPossible>
                            <a href="${identity.actionUrl}" type="submit" id="remove-${identity.providerId!}" class="cancel">${msg("doRemove")}</a>
                        </#if>
                    <#else>
                        <a href="${identity.actionUrl}" type="submit" id="add-${identity.providerId!}" class="confirm">${msg("doAdd")}</a>
                    </#if>
                </div>

        </#list>
    </form>

</@layout.mainLayout>