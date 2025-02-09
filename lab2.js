var json = {
    "schedule": {
      "days": [
        {
          "day": "Пнд,03 февраля",
          "lessons": [
            "Математика",
            "Физика",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "day": "Втр,04 февраля",
          "lessons": [
            "",
            "История",
            "Литература",
            "",
            "",
            "",
            ""
          ]
        },
       {
          "day": "Срд,05 февраля",
          "lessons": [
            "Химия",
            "",
            "",
            "Физкультура",
            "",
            "",
            ""
          ]
        },
        {
          "day": "Чтв,06 февраля",
          "lessons": [
            "",
            "Английский",
            "",
            "",
            "Программирование",
            "",
            ""
          ]
        },
        {
          "day": "Птн,07 февраля",
          "lessons": [
            "Математика",
            "Физика",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "day": "Сбт,08 февраля",
          "lessons": [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "day": "Вск,09 февраля",
          "lessons": [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ]
    }
  }

  var tbody = document.getElementById("docTable").getElementsByTagName("tbody")[0];
  var counter = 0;
  json.schedule.days.forEach(element => {
    var row = tbody.children[counter]; 
    row.children[0].innerText = element.day;

    // Дальше добавляем дни
    for(var lessonIndex = 0; lessonIndex < element.lessons.length; ++lessonIndex){
        if(element.lessons[lessonIndex] != ""){
            row.children[1 + lessonIndex].innerText = element.lessons[lessonIndex];
        }
    }
    ++counter;
  });