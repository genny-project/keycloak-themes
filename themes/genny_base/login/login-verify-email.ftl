<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "title">
        ${msg("emailVerifyTitle")}
    <#elseif section = "header">
        ${msg("emailVerifyTitle")}
    <#elseif section = "form">
        <div class="login-container">
        
            <div class="form-text">
                <p class="instruction">
                    ${msg("emailVerifyInstruction1")}
                </p>
                <p class="instruction">
                    ${msg("emailVerifyInstruction2")}
                </p>
            </div>

            <div class="input-submit input-inline">
                <a class="confirm no-margin-bottom" href="${url.loginAction}">${msg("emailVerifyInstruction3")}</a> 
            </div>

        </div>
    </#if>
</@layout.registrationLayout>