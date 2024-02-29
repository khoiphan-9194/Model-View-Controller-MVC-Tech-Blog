const id = "localhost:3001/api/blogs/1".split('/')[
    "localhost:3001/api/blogs/edit/1".split('/').length - 2
    ];

    console.log(id)


    import dayjs from 'dayjs';
    
    function displayTime()
    {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    console.log(rightNow);
    setInterval(displayTime,1000);
    }
    displayTime();