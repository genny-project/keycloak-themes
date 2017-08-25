<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo; section>
    <#if section = "title"> 
   <#-- need to make this work
    ${msg("loginTitle",(realm.displayName!''))}  -->
    <#elseif section = "header">
        <#-- ${msg("loginTitleHtml",(realm.displayNameHtml!''))}  -->
    <#elseif section = "form">
        <#if realm.password>
            <form  action="${url.loginAction}" method="post">
                
                <div class="login-container">

                    <div class="project-title">
                        <div class="project-logo"></div>
                        <p>${properties.themeTitle!}</p>
                    </div>

                    <div class="title">LOGIN TO YOUR ACCOUNT</div>

                    <div class="input-detail">

                       <div class="input-email">
                            <#if usernameEditDisabled??>
                                <input id="username"  name="username" value="${(login.username!'')?html}" type="text" placeholder="email address" disabled />
                            <#else>
                                <input id="username"  name="username" value="${(login.username!'')?html}" type="text" placeholder="email address" autofocus autocomplete="off" />
                            </#if>
                            <i id="input-email-icon" class="fa fa-fw fa-envelope" aria-hidden="true"></i>
                        </div>

                        <div class="input-password">
                            <input type="password" name="password" id="password" autocomplete="off" placeholder="password" />
                            <i  id="input-password-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
                        </div>

                         <div id="kc-form-options">
                            <#if realm.rememberMe && !usernameEditDisabled??>
                                <div class="input-checkbox">
                                    <label>
                                        <#if login.rememberMe??>
                                            <input id="rememberMe" name="rememberMe" type="checkbox" tabindex="3" checked> ${msg("rememberMe")}
                                        <#else>
                                            <input id="rememberMe" name="rememberMe" type="checkbox" tabindex="3"> ${msg("rememberMe")}
                                        </#if>
                                    </label>
                                </div>
                            </#if>
                        </div>

                        <div class="input-submit">
                            <button type="submit">Login</button>
                        </div>
                    </div>

                    <div class="link link-login">
                        <#if realm.resetPasswordAllowed>
                            <span class="forget-password"> <a href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a></span>
                        </#if>
                        
                        <#if realm.password && realm.registrationAllowed && !usernameEditDisabled??>
                            <span class="register"><a href="${url.registrationUrl}">Create an Account</a></span>
                        </#if>
                    </div>

                    <div class="social-login">

                        <div class="social-login-title">OR LOGIN WITH</div>

                        <#if realm.password && social.providers??>
                            <div id="kc-social-providers">
                                <ul>
                                    <#list social.providers as p>
                                        <li>
                                            <a href="${p.loginUrl}" class=" ${p.providerId}">
                                                <i class="fa fa-${p.providerId}" aria-hidden="true"></i>
                                                <span>${p.providerId}</span>
                                            </a>
                                        </li>
                                    </#list>
                                </ul>
                            </div>
                        </#if>
                    </div>

                </div>
            </form>
        </#if>
    </#if>
</@layout.registrationLayout>
