TensorFlow is a Machine Learning framework developed by Google Inc. It includes different binding : C++, Java, Golang, Python, Javascript ...
Python API is the most used by developpers

# Import

```python
import tensorflow as tf
```

# Module tf
Bring in all of the public TensorFlow interface.
```python
#Classes:

tf.Graph() '''A TensorFlow computation, represented as a dataflow graph.'''

tf.device() '''A TensorFlow class to define the device (cpu/gpu) to use '''

tf.Operation() '''Represents a graph node that performs computation on tensors.'''

tf.Session()'''A class for running TensorFlow operations.'''

#Functions:

'''Returns x + y element-wise.'''
a = tf.add(x, y) 

'''Return a tensor with the same shape and contents as input. (name: A name for the operation (optional))'''
b = tf.identity(a, name=None)

'''Returns the index with the largest value across axes of a tensor
example: for a 2D tensor, axis=1 refers to rows'''
c = tf.argmax(input, axis=None,name=None)

'''Computes square root of x element-wise.'''
d = tf.sqrt(x, name=None)
```
More functions are available on the following link :
    https://www.tensorflow.org/api_docs/python/tf