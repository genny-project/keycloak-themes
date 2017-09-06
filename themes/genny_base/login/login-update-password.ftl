<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true; section>
    <#if section = "title">
        ${msg("updatePasswordTitle")}
    <#elseif section = "header">
        ${msg("updatePasswordTitle")}
    <#elseif section = "form">
        <form id="kc-passwd-update-form" action="${url.loginAction}" method="post">

            <div class="login-container">

                <div class="project-title">
                    <div class="project-logo"></div>
                    <p>${properties.themeTitle!}</p>
                </div>

                <div class="title">ENTER A NEW PASSWORD</div>

                <div class="input-detail">
                
                    <input type="text" readonly value="this is not a login form" style="display: none;">
                    <input type="password" readonly value="this is not a login form" style="display: none;">

                    <div class="input-password">
                        <input type="password" name="password-new" id="password-new" autocomplete="off" autofocus placeholder="${msg("passwordNew")}" />
                        <i id="input-password-icon" class="fa fa-fw fa-unlock-alt" aria-hidden="true"></i>
                    </div>

                    <div class="input-password">
                        <input type="password" name="password-confirm" id="password-confirm" autocomplete="off" placeholder="${msg("passwordConfirm")}" />
                        <i  id="input-password-confirm-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
                    </div>

                    <div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
                        <div class="${properties.kcFormOptionsWrapperClass!}">
                        </div>
                    </div>

                    <div class="input-submit">
                        <input type="submit" class="confirm" value="${msg("doSubmit")}"/>
                    </div>

                </div>

            </div>

        </form>
    </#if>
</@layout.registrationLayout>