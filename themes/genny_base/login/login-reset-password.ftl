<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true; section>
    <#if section = "title">
        ${msg("emailForgotTitle")}
    <#elseif section = "header">
        ${msg("emailForgotTitle")}
    <#elseif section = "form">
        <form id="kc-reset-password-form" action="${url.loginAction}" method="post">
            
            <div class="login-container">
                
                <div class="project-title">
                    <div class="project-logo"></div>
                    <p>${properties.themeTitle!}</p>
                </div>

                <div class="title">RESET YOUR PASSWORD</div>

                 <div class="input-detail">
                        

                    <div class="input-email">
                        <#if !realm.loginWithEmailAllowed>

                            <input type="text" id="username" name="username" placeholder="username" autofocus/>

                        <#elseif !realm.registrationEmailAsUsername>

                            <input type="text" id="username" name="username" placeholder="usernameOrEmail" autofocus/>

                        <#else>

                            <input type="text" id="username" name="username" placeholder="email" autofocus/>

                        </#if>
                        <i id="input-email-icon" class="fa fa-fw fa-envelope" aria-hidden="true"></i>
                    </div>

                    <div class="input-submit">
                        <button type="submit" value="${msg("doSubmit")}">Send Reset Email</button>
                    </div>

                    <div class="link link-reset">
                        <#if realm.resetPasswordAllowed>
                             <span class="login"><a href="${url.loginUrl}">Back to login</a></span>
                        </#if>
                        
                        <#if realm.password && realm.registrationAllowed && !usernameEditDisabled??>
                            <span class="register"><a href="${url.registrationUrl}">Create an Account</a></span>
                        </#if>
                    </div>                    

                </div>

            </div>

        </form>
    
    <#elseif section = "info" >
        ${msg("emailInstruction")}
    </#if>

</@layout.registrationLayout>
