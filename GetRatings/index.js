module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request. Test');

    context.res = {
        body: context.bindings.inputDocument
    };
    context.done();
};