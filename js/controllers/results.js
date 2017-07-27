/**
 * Created by KostyaGromov on 26.07.2017.
 */
(function () {

    angular.module('turtleFacts').controller('resultsCtrl', ResultsController);

    ResultsController.$inject = ['quizMetrics','DataService'];

    function  ResultsController (quizMetrics, DataService) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.activeQuestion = 0;
        vm.setActiveQuestion = setActiveQuestion;
        vm.getAnswerClass = getAnswerClass;
        vm.calculatePerc = calculatePerc;
        vm.reset = reset;

        function  reset () {
            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;

            for (var i = 0; i < DataService.quizQuestions.length; i++) {
                var data = DataService.quizQuestions[i];

                data.selected = null;
                data.correct = null;
            }
        }

        function calculatePerc () {
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion (index) {
            vm.activeQuestion = index;
        }

        function  getAnswerClass (index) {
            if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
                return "bg-success";
            } else if (index === DataService.quizQuestions[vm.activeQuestion].selected) {
                return "bg-danger";
            }
        }
    }
    
})();