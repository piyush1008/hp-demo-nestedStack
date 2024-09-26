import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class RoutingNestedStack extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'LambdaFunction3', {
        runtime: lambda.Runtime.NODEJS_18_X,
        code: lambda.Code.fromInline('exports.handler = async () => { console.log("Lambda 3 executed"); }'),
        handler: 'index.handler',
      });


      new lambda.Function(this, 'LambdaFunction4', {
        runtime: lambda.Runtime.NODEJS_18_X,
        code: lambda.Code.fromInline('exports.handler = async () => { console.log("Lambda 4 executed"); }'),
        handler: 'index.handler',
      });

    

  }
}
