<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
    <#if section = "header">
        ${msg("termsTitle")}
    <#elseif section = "form">
    <div id="kc-terms-text">

        <#if !properties.termsandconditions?has_content>
            <p>
                No terms and conditions content found.
            </p>
        </#if>
    
        <#if properties.termsandconditions?has_content>
            <#list properties.termsandconditions?split('??') as content_block>
                <h1>
                    ${content_block?split('==')[0]}
                </h1>
                <p>
                    ${content_block?split('==')[1]}
                </p>
            </#list>
        </#if>

    </div>
    <form class="form-actions" action="${url.loginAction}" method="POST">
        <input class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonLargeClass!}" name="accept" id="kc-accept" type="submit" value="${msg("doAccept")}"/>
        <input class="${properties.kcButtonClass!} ${properties.kcButtonDefaultClass!} ${properties.kcButtonLargeClass!}" name="cancel" id="kc-decline" type="submit" value="${msg("doDecline")}"/>
    </form>
    <div class="clearfix"></div>
    </#if>
</@layout.registrationLayout>
