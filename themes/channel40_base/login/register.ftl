<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "title">
        <#-- ${msg("registerWithTitle",(realm.displayName!''))} -->
    <#elseif section = "header">
        <#-- ${msg("registerWithTitleHtml",(realm.displayNameHtml!''))} -->
    <#elseif section = "form">
        <form  action="${url.registrationAction}" method="post">
<div class="login-container" style="height:550px">
        <div class="project-title">
        I
            <b>N</b> T
            <b>E</b> R 
            <b>N</b>
        M
        <b>A</b> T 
        <b> C </b>
            H
        </div>
        <div class="title">REGISTER</div>
        <div class="input-detail">
          <#if !realm.registrationEmailAsUsername>
            <div class="${properties.kcFormGroupClass!} ${messagesPerField.printIfExists('username',properties.kcFormGroupErrorClass!)}">
                <div class="${properties.kcLabelWrapperClass!}">
                    <label for="username" class="${properties.kcLabelClass!}">${msg("username")}</label>
                </div>
                <div class="${properties.kcInputWrapperClass!}">
                    <input type="text" id="username" class="${properties.kcInputClass!}" name="username" value="${(register.formData.username!'')?html}" />
                </div>
            </div>
          </#if>
                <div class="input-email">
                    <input type="text" id="firstName" name="firstName" value="${(register.formData.firstName!'')?html}" placeholder="first name" />
                </div>
            <div class="input-password">

                <input type="text" name="lastName" id="lastName" value="${(register.formData.lastName!'')?html}" placeholder="last name" />
            </div>
        <div class="input-password">
                <input type="text" name="email" id="email"  value="${(register.formData.email!'')?html}" placeholder="email" />
            </div>

        <#if passwordRequired>
             <div class="input-password">
                <input type="password" name="password" id="password" placeholder="password" />
            </div>
                 <div class="input-password">
                <input type="password" id="password-confirm"  name="password-confirm" placeholder="password-confirm" />
            </div>
            </#if>
            <div class="input-submit">
                <button type="submit">Register </button>
            </div>
        </div>
        <div class="link" style="display:block">
                <span style="float:right; margin-right:30px"><a href="${url.loginUrl}">Login</a></span>
        </div>
        <div class="social-login">
            <div class="social-login-title"> Register with </div>
            <#-- <img class="social-icon" src="/auth/resources/3.1.0.cr1/login/genny/img/fb.jpg"></img>
            <img class="social-icon" src="/auth/resources/3.1.0.cr1/login/genny/img/google.png"></img>
            <img class="social-icon" src="/auth/resources/3.1.0.cr1/login/genny/img/linkedin.png"></img> -->
       
       
        <#if realm.password && social.providers??>
                <ul>
                    <#list social.providers as p>
                        <li><a href="${p.loginUrl}" class=" ${p.providerId}"> </a></li>
                    </#list>
                </ul>
        </#if>

        </div>
    </div>
        </form>
    </#if>
</@layout.registrationLayout>