studentinfo.map((data, index)=> {
    let result='';
    data.bangla >= 33 && data.english >= 33 && data.islam >= 33 && data.science >= 33 && data.mathematics >= 33 && data.hostori >= 33 ? result = "Passad" : result = "Failed";
    let cgpa = gpacal(data.bangla) + gpacal(data.english) + gpacal(data.english) + gpacal(data.english) + gpacal(data.english) + gpacal(data.english);
    cgpa = cgpa / 6;
    //if result is "failed" cgpa is 0
    result == "Failed" ? cgpa = 0 : '';

    console.log(`
      Class "Five" Student result
      Name : ${data.name}
      Roll:${data.roll}
      Age :${data.age}
      locatiopn : ${data.location}
      --------------------------------------------------------------------------------------------------
        Subject            marks                           GPA                              Grade   
        Bangla         ${data.bangla}               ${gpacal(data.bangla)}             ${gradecal(data.bangla)}
       English         ${data.english}              ${gpacal(data.english)}            ${gradecal(data.english)}
         Islam         ${data.islam}                ${gpacal(data.islam)}              ${gradecal(data.islam)}
       Science         ${data.science}              ${gpacal(data.science)}            ${gradecal(data.science)}
    Mathematic         ${data.mathematics}          ${gpacal(data.mathematics)}        ${gradecal(data.mathematics)}
       History         ${data.hostori}              ${gpacal(data.hostori)}            ${gradecal(data.hostori)}
       ===========================================================================================================
                                                                                   CGPA = ${cgpa.toFixed(2)}
                                                                           Final Result = ${result}
    `);
});
