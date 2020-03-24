$("#contactform").submit(function (e) {
    e.preventDefault();
    var myData = {
        projectname :$ ('input[name="project name"]').val()
        ,subject :$ ('input[name="subject"]').val()
        ,video :$ ('input[name="video"]').val()
        ,discription :$ ('input[name="discription"]').val()
        
    }
    console.log(myData)
    var url = '';
    $.post(url, myData).done(function (data) {
        console.log(data);
    })
})