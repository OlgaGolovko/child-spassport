$(document).ready(function() {
    $(".child-name").click(function() {
        let clickId = $(this).prop("id");
        let childName = prompt("Введіть ім'я та прізвище дитини:");
        if (clickId === "child-name1") {
            $("#child-name1").text(childName);
        } else if (clickId === "child-name2") {
            $("#child-name2").text(childName);
        } else if (clickId === "child-name3") {
            $("#child-name3").text(childName);
        } else {
            $("#child-name4").text(childName);
        }
    });

    $(".mather-name").click(function() {
        let clickId = $(this).prop("id");
        let matherName = prompt("Введіть ім'я і по-батькові мами:");
        if (clickId === "mather-name1") {
            $("#mather-name1").text(matherName);
        } else if (clickId === "mather-name2") {
            $("#mather-name2").text(matherName);
        } else if (clickId === "mather-name3") {
            $("#mather-name3").text(matherName);
        } else {
            $("#mather-name4").text(matherName);
        }
    });

    $(".father-name").click(function() {
        let clickId = $(this).prop("id");
        let fatherName = prompt("Введіть ім'я і по-батькові тата:");
        if (clickId === "father-name1") {
            $("#father-name1").text(fatherName);
        } else if (clickId === "father-name2") {
            $("#father-name2").text(fatherName);
        } else if (clickId === "father-name3") {
            $("#father-name3").text(fatherName);
        } else {
            $("#father-name4").text(fatherName);
        }
    });

    $(".mather-phone-number").click(function() {
        let clickId = $(this).prop("id");
        let matherPhone = prompt("Введіть номер телефона мами:");
        if (clickId === "mather-phone-number1") {
            $("#mather-phone-number1").text(matherPhone);
        } else if (clickId === "mather-phone-number2") {
            $("#mather-phone-number2").text(matherPhone);
        } else if (clickId === "mather-phone-number3") {
            $("#mather-phone-number3").text(matherPhone);
        } else {
            $("#mather-phone-number4").text(matherPhone);
        }
    });

    $(".father-phone-number").click(function() {
        let clickId = $(this).prop("id");
        let fatherPhone = prompt("Введіть номер телефона тата:");
        if (clickId === "father-phone-number1") {
            $("#father-phone-number1").text(fatherPhone);
        } else if (clickId === "father-phone-number2") {
            $("#father-phone-number2").text(fatherPhone);
        } else if (clickId === "father-phone-number3") {
            $("#father-phone-number3").text(fatherPhone);
        } else {
            $("#father-phone-number4").text(fatherPhone);
        }
    });
});