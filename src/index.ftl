<#--<#assign title = "Easy Insights" />
<#include "/common/header.ftl">-->

<!DOCTYPE html {% if(o.htmlWebpackPlugin.files.manifest) { %} manifest="{%= o.htmlWebpackPlugin.files.manifest %}"{% } %}>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="${urlProvider.versionedURL('/chs/easyinsights/style.css')}">
		<script>window.twttr = (function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0],
			    t = window.twttr || {};
			  if (d.getElementById(id)) return t;
			  js = d.createElement(s);
			  js.id = id;
			  js.src = "https://platform.twitter.com/widgets.js";
			  fjs.parentNode.insertBefore(js, fjs);

			  t._e = [];
			  t.ready = function(f) {
			    t._e.push(f);
			  };

			  return t;
			}(document, "script", "twitter-wjs"));</script>
	</head>
	<body>
		<div id="mainContent"></div>
    <script src="${urlProvider.versionedURL('/chs/easyinsights/main.js')}"></script>
	</body>
</html>

<#--<#include "/common/footer.ftl">-->
