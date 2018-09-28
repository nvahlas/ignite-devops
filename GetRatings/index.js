module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request. Staging');

    context.res = {
        body: context.bindings.inputDocument
    };
    context.done();
};