```python
recall = tf.metrics.recall(labels,predictions)
```
Most of the functions provided can be applied for a classification task
More functions are available on the following link :
https://www.tensorflow.org/api_docs/python/tf/metrics

# Module tf.train
This module introduces basic classes and functions to monitor your training.
In order to train your model, you need to use an optimizer that will handle the backpropagation algorithm. TensorFlow provides many implemantations of famous optimizers:
```python
#We suppose that we have defined the loss function
your_learning_rate = value
optimizer = tf.train.AdamOptimizer(
            learning_rate = your_learning_rate
            )

#Define the training operation:
train_op = optimizer.minimize(loss)
```
Below a list of the different optimizers, that you can find in the following link:
https://www.tensorflow.org/api_docs/python/tf/train
```python
tf.train.AdadeltaOptimizer #M. D. Zeiler
tf.train.AdagradDAOptimizer #John Duchi, Elad Hazan, Yoram Singer
tf.train.MomentumOptimizer
```
The tf.train module also come with different Session types, that will manage running your operation graph, and provides live information about your training like the number of step, the actual value of your loss function and the actual value(s) of the metric(s) you have chosen. Below an exaustive list:
```python
tf.train.MonitoredSession 
tf.train.SessionManager 
```
Finally, the tf.train module regroup classes and functions to define distributed training over a cluster, and provides tools to monitor it.
