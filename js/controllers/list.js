/**
 * Created by KostyaGromov on 26.07.2017.
 */
(function () {

    angular.module('turtleFacts').controller('listCrtl', ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController (quizMetrics, DataService) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.data = DataService.turtlesData;
        vm.activeTurtle = {};
        vm.search = "";


        vm.activateQuiz = function () {
            quizMetrics.changeState("quiz", true);
        };

        vm.changeActiveTurtle = function (index) {
            vm.activeTurtle = index;
        }
    }

})();