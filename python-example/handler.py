import json
import time 
import os   

def hello(event, context):
  #  print("Hello World")
  #  time.sleep(4)
    return os.environ['FIRST_NAME']


