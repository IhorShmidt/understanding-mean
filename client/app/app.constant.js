(function(angular, undefined) {
  angular.module("understandingMeanApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);