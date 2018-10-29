const answer = document.getElementById("answer");
const domain = document.getElementById("domain");
const form = document.getElementsByClassName("form__spf-wizard");

//Add IP Address
$(document).ready(() => {
    //Auto insert domain name into #domainName
    let domainNamePlaceHolder = "your domain,";
    let domainName = "";
    $("#domain").keyup(x => {
        if (x.originalEvent.key === "Backspace" && $("#domain").val() === "") {
            $("#domainName").text(domainNamePlaceHolder);
        } else {
            domainName = $("#domain").val();
            $("#domainName").text(domainName);
        }
    });

    // $("#domainName").text(domainNamePlaceHolder); //is this necessary?

    /*let foo = $("#answer").html();
  const main = ["@ IN TXT", ' "v=spf1', '"'];
    $("#relayIPAddress").keypress(x => {
    main.splice(2, 0, "test");
    console.log(x.originalEvent.key);
    /*$("#answer").text(x.originalEvent.key);
    console.log(main);
    $("#answer").text(main.join(" "));
  });
  $("#answer").text(main.join(" "));*/

    //auto insert domain name in #answer
    let yourDomain = "example.com";
    let recordInfo = ". IN TXT";
    $("#domain").keyup(x => {
        if (x.originalEvent.key === "Backspace" && yourDomain.length === 1) {
            yourDomain = "example.com";
        } else {
            yourDomain = $("#domain").val();
        }
        $("#answer")
            .text(yourDomain)
            .append(recordInfo);
        //i need this to also run the getAnswers function when yourDomain value changes
    });

    //    $("#answer").text(yourDomain);

    //MX Servers, IP Address, Hostnames, and Strict inputs
    //reruns on every input click no long duplicates answers in answer box

    $(
        "input[name=MXServers], input[name=IPAddress], input[name=hostnames], input[name=strict]"
    ).on("click", function getAnswers() {
        let MXServers = $("input[name=MXServers]:checked").val();
        let IPAddress = $("input[name=IPAddress]:checked").val();
        let Hostnames = $("input[name=hostnames]:checked").val();
        let strict = $("input[name=strict]:checked").val();

        // $(printToAnswer);

        $("#answer")
            .text(yourDomain)
            .append(
                recordInfo,
                " ",
                '"',
                MXServers,
                IPAddress,
                Hostnames,
                strict,
                // relayIPAddressOutput,
                '"'
            );
    });

    //auto insert IP relay in answer box
    // $("#relayIPAddress").keyup(x => {
    //     var recordInfo = "ip4:";
    //     var relayIPAddress = $("#relayIPAddress").val();
    //     if (
    //         x.originalEvent.key === "Backspace" &&
    //         relayIPAddress.length === 1
    //     ) {
    //         $("#relayIPAddress").attr(
    //             "placeholder",
    //             "IP address(es) in CIDR format"
    //         );
    //     } else {
    //         recordInfo.concat(relayIPAddress);
    //     }
    //     $(printToAnswer);
    //     //need to figure out how to get this function to fire on key up to append the value to the end of #domain but inside the quotes...
    // });

    // function printToAnswer() {
    //return form inputs
    // $("#answer")
    //     .text(yourDomain)
    //     .append(
    //         recordInfo,
    //         " ",
    //         '"',
    //         MXServers,
    //         IPAddress,
    //         Hostnames,
    //         strict,
    //         relayIPAddressOutput,
    //         '"'
    //     );
    // }
});

//IP Address

// const answerText = domain.value + "" + 'IN TXT "v=spf1"';

// //populate answer box
// function submitForm() {
//     if (domain.value != undefined) {
//         answer.innerHTML = answerText;
//     }
//     // answer.innerHTML = domain.value + "." + " " + "IN TXT";
// }
