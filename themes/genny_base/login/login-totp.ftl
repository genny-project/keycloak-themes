<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "title">
        ${msg("loginTitle",realm.displayName)}
    <#elseif section = "header">
        ${msg("loginTitleHtml",realm.displayNameHtml)}
    <#elseif section = "form">
        <form id="kc-totp-login-form" action="${url.loginAction}" method="post">
            
            <div class="login-container">

                <div class="project-title">
                    <div class="project-logo"></div>
                    <p>${properties.themeTitle!}</p>
                </div>

                <div class="title">LOGIN TO YOUR ACCOUNT</div>

                <div class="input-detail">

                    <div class="input-totp">
                        <input type="text" name="totp" id="totp" placeholder="${msg("loginTotpOneTime")}" autocomplete="off" autofocus />
                        <i  id="input-totp-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
                    </div>
                    <#--

                    -->

                         <div id="kc-form-buttons" class="submit">
                            <div class="input-submit input-inline">
                                <input type="submit" class="confirm" name="login" id="kc-login" value="${msg("doLogIn")}"/>
                                <input type="submit" class="cancel" name="cancel" id="kc-cancel" value="${msg("doCancel")}"/>
                            </div>
                        </div>

                        <#--

                         <div id="kc-form-buttons" class="${properties.kcFormButtonsClass!}">
                            <div class="${properties.kcFormButtonsWrapperClass!}">
                                <input class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonLargeClass!}" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}"/>
                                <input class="${properties.kcButtonClass!} ${properties.kcButtonDefaultClass!} ${properties.kcButtonLargeClass!}" name="cancel" id="kc-cancel" type="submit" value="${msg("doCancel")}"/>
                            </div>
                        </div>
                        
                        -->

                </div>
            </div>
        </form>
    </#if>
</@layout.registrationLayout>