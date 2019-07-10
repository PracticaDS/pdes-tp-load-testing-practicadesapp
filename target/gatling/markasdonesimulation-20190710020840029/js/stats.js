var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "meanResponseTime": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "-",
        "ko": "3"
    },
    "percentiles1": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "percentiles3": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "percentiles4": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "group1": {
        "name": "t < 5 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "5 ms < t < 20 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 20 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 500,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
},
contents: {
"req_create-user-8a6d1": {
        type: "REQUEST",
        name: "Create user",
path: "Create user",
pathFormatted: "req_create-user-8a6d1",
stats: {
    "name": "Create user",
    "numberOfRequests": {
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "meanResponseTime": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "-",
        "ko": "3"
    },
    "percentiles1": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles2": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "percentiles3": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "percentiles4": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "group1": {
        "name": "t < 5 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "5 ms < t < 20 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 20 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 500,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
