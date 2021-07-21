import React from "react";
import NameList2 from "./NameList2";

function NameList() {
    const persons =  [
    {
    "userId":"rirani",
    "jobTitleName":"Developer",
    "firstName":"Romin",
    "lastName":"Irani",
    "preferredFullName":"Romin Irani",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":"408-1234567",
    "emailAddress":"romin.k.irani@gmail.com"
    },
    {
    "userId":"nirani",
    "jobTitleName":"Developer",
    "firstName":"Neil",
    "lastName":"Irani",
    "preferredFullName":"Neil Irani",
    "employeeCode":"E2",
    "region":"CA",
    "phoneNumber":"408-1111111",
    "emailAddress":"neilrirani@gmail.com"
    },
    {
    "userId":"thanks",
    "jobTitleName":"Program Directory",
    "firstName":"Tom",
    "lastName":"Hanks",
    "preferredFullName":"Tom Hanks",
    "employeeCode":"E3",
    "region":"CA",
    "phoneNumber":"408-2222222",
    "emailAddress":"tomhanks@gmail.com"
    }
    ];
  // const list = persons.map((x) => <h1>Use ID :{x.userId}  Job : {x.jobTitleName} FirstName : {x.firstName}</h1>);
     const list=   persons.map(x => <NameList2 x={x}/>);

  return (
    <div>
      <h1>{list}</h1>
    </div>
  );
}

export default NameList;
