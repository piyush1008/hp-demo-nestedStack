import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { RoutingNestedStack } from './routing-stack';
import { SupportNestedStack } from './support-stack';

export class LambdaNestedStack extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props?: cdk.NestedStackProps) {
    super(scope, id, props);

    new RoutingNestedStack(this, 'RoutingNestedStack');

    new SupportNestedStack(this, 'SupportNestedStack');


    // Define multiple Lambda functions here
    new lambda.Function(this, 'LambdaFunction1', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromInline('exports.handler = async () => { console.log("Lambda 1 executed"); }'),
      handler: 'index.handler',
    });

    new lambda.Function(this, 'LambdaFunction2', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromInline('exports.handler = async () => { console.log("Lambda 2 executed"); }'),
      handler: 'index.handler',
    });

    // You can add more Lambda functions similarly
  }
}
