
export const lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world -- GC Demo',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
