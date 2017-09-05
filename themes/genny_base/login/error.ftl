<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
    <#if section = "title">
        ${msg("errorTitle")}
    <#elseif section = "header">
        ${msg("errorTitleHtml")}
    <#elseif section = "form">
        <div class="login-container">
            <div id="kc-error-message" class="center-text">
                <p class="instruction">${message.summary}</p>
                    <#if client?? && client.baseUrl?has_content>
                        <p><a id="backToApplication" href="${client.baseUrl}">${msg("backToApplication")}</a></p>
                    </#if>
                </div>
            </div>
        </div>
    </#if>
</@layout.registrationLayout>