<html>
	<body>
	<header>
		<h1>${properties.themeTitle!}</h1>
	</header>
		<div class="main">
			${msg("emailVerificationBodyHtml",link, linkExpiration, realmName)}
		</div>
	</body>
</html>
