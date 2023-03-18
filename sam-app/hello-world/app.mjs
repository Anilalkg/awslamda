export const lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world this is Great--- changing ',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
