import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { WidgetVpc } from 'coremodule/src/widgets/myWidget/vpc';
import { MyStack } from '../src/main';

test('Snapshot', () => {
  const app = new App();
  const stack = new MyStack(app, 'test');

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});

test('Use widget from coremodule', () => {
  // Given
  const stack = new Stack();
  const widget = new WidgetVpc(stack, 'WidgetVpc', {
    name: 'test',
    cidr: '10.0.0.0/24',
  });

  // When
  const template = Template.fromStack(stack);

  // Then
  expect(widget).not.toBeNull();
  template.hasResource('AWS::EC2::VPC', {});
});
