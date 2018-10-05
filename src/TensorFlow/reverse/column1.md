# Module tf.nn
This module introduces basic functions for computer vision and sequential data (ex : text)
```python
# Build a graph:
input_img = tf.placeholder(tf.float32, [batch_size, height, width, channels])
filter_img = tf.Variable(tf.random_uniform([7,7,3,target_channels]))

#strides: , padding can take the values "SAME" to maintain  the same dimension of the input or "VALID"
net = tf.nn.conv2d(input_img, filter_img, strides=[1,2,2,1], padding="SAME")
```
More functions are available on the following link :
            https://www.tensorflow.org/api_docs/python/tf/nn
# Module tf.metrics
In order to evaluate your model, TensorFlow provides you with different functions that you can call during the computation graph. For each target response, we compare it with the value predicted by the model:
```python
accuracy = tf.metrics.accuracy(labels,predictions)
```
Calculates how often predictions matches labels. The accuracy function creates two local variables, total and count that are used to compute the frequency with which predictions matches labels. This frequency is ultimately returned as accuracy: an idempotent operation that simply divides total by count.
<img src="../assets/images/precision_recall.png" width="400"/>
```python
precision = tf.metrics.precision(labels,predictions)
```