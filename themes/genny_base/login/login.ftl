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
            <p>GENNY</p>
        </div>
        <div class="title">LOGIN</div>
        <div class="input-detail">
           <div class="input-email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <#if usernameEditDisabled??>
                    <input id="username"  name="username" value="${(login.username!'')?html}" type="text" placeholder="email" disabled />
                <#else>
                    <input id="username"  name="username" value="${(login.username!'')?html}" type="text" placeholder="email" autofocus autocomplete="off" />
                </#if>
            </div>
            <div class="input-password">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type="password" name="password" id="password" autocomplete="off" placeholder="password" />
            </div>
            <div class="input-submit">
                <button type="submit">Log In </button>
            </div>
        </div>
        <div class="link">
               <#if realm.resetPasswordAllowed>
                       <span class="forget-password"> <a href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a></span>
                </#if>
            <#if realm.password && realm.registrationAllowed && !usernameEditDisabled??>
                <span class="register"><a href="${url.registrationUrl}">${msg("doRegister")}</a></span>
        </#if>
        </div>
        <div class="social-login">
            <#if realm.password && social.providers??>
                <div id="kc-social-providers">
                    <ul>
                        <#list social.providers as p>
                            <li>
                                <a href="${p.loginUrl}" class=" ${p.providerId}">
                                    <i class="fa fa-${p.providerId}" aria-hidden="true"></i>
                                    <span>Login</span>
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
