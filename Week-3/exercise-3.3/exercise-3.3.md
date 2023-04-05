# Assignment 3

## _Output_

Count is 0

## Why?

The function _createIncrement()_ is called once at `const [increment, log] = createIncrement();`
and the count is set to 0 and the message is set to 'Count is 0'.
Next when the _increment()_ function is called thrice, the value of count is incremented but the message isn't changed as it lies outside the _increment()_ function.
When the _log()_ function is called it prints the initially set message which has not changed-

#### Count is 0
