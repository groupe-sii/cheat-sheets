# Module tf.data
This module contains different class used to manipulate data. Different files format are supported. It also introduces special classes fitted to TensorFlow for encoding/decoding data.
```python
# Load the training data into two NumPy arrays, for example using `np.load()`.
with np.load("/var/data/training_data.npy") as data:
  features = data["features"]
  labels = data["labels"]

# Assume that each row of `features` corresponds to the same row as `labels`.
assert features.shape[0] == labels.shape[0]

dataset = tf.data.Dataset.from_tensor_slices((features, labels))
```
If you choose tfrecord format for encoding your data, you can use the following way to read (parse) your file(s):
```python
# It accepts one or more filenames.
filenames = ["/var/data/file1.tfrecord", "/var/data/file2.tfrecord"]
dataset = tf.data.TFRecordDataset(filenames)
#Apply a transformation function to your data
dataset = dataset.map(func) 
```
If your data is contained in text files, you can use the following way to read (parse) it:
```python
# It accepts one or more filenames.
filenames = ["/var/data/file1.txt", "/var/data/file2.txt"]
dataset = tf.data.TextLineDataset(filenames)
```
In order to iterate over the dataset, TensorFlow provides the Iterator class:
```python
# The returned iterator will be in an uninitialized state, and you must run the iterator.initializer operation before using it:
iterator = dataset.make_initializable_iterator()
tf.Session().run(iterator.initializer)
#Or use one_shot iterator that will be automatically initialized:
iterator = dataset.make_one_shot_iterator()
```
