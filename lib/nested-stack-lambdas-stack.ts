import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaNestedStack } from './lambda-nested-stack';

export class NestedStackLambdasStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Deploy the nested stack for Lambdas
    new LambdaNestedStack(this, 'LambdaNestedStack');
  }
}
