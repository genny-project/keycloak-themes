<#import "template.ftl" as layout>
<@layout.mainLayout active='totp' bodyClass='totp'; section>

    <#if totp.enabled>

        <div class="page-title">
            <h2>${msg("authenticatorTitle")}</h2>
        </div>

        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th colspan="2">${msg("configureAuthenticators")}</th>
                    </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="provider">${msg("mobile")}</td>
                    <td class="action">
                        <a id="remove-mobile" href="${url.totpRemoveUrl}"><i class="pficon pficon-delete"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>

    <#else>

        <div class="page-title">
            <h2>${msg("authenticatorTitle")}</h2>
        </div>

        <hr/>

        <ol class="form-list">
            <li>
                <p>${msg("totpStep1")}</p>
            </li>
            <li>
                <p>${msg("totpStep2")}</p>
                <p class="text-center"><img src="data:image/png;base64, ${totp.totpSecretQrCode}" alt="Figure: Barcode"></p>
                <p class="text-center form-code"><span class="code ">${totp.totpSecretEncoded}</span></p>
            </li>
            <li>
                <p>${msg("totpStep3")}</p>
            </li>
        </ol>

        <form action="${url.totpUrl}" class="input-detail" method="post">
            
            <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker?html}">
            
            <div class="input-lastname ${messagesPerField.printIfExists('lastName','has-error')}">
                <input type="text" name="totp" id="totp" placeholder="${msg("authenticatorCode")}" autocomplete="off" autofocus />
                <input type="hidden" id="totpSecret" name="totpSecret" value="${totp.totpSecret}" />
                <i  id="input-lastname-icon" class="fa fa-fw fa-lock" aria-hidden="true"></i>
            </div>

            <div id="kc-form-buttons" class=" submit">
                <div class="input-submit input-inline">
                    <button type="submit" class="confirm" name="submitAction" value="Save">Save</button>
                    <button type="submit" class="cancel" name="submitAction" value="Cancel">Cancel</button>
                </div>
            </div> 

        </form>
    </#if>

</@layout.mainLayout>
