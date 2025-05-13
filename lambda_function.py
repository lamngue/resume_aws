import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('viewers_count2')

def lambda_handler(event, context):   
    # Handle the actual GET request
    response = table.update_item(
        Key={
            'id': "1"
        },
        UpdateExpression='ADD viewers :inc',
        ExpressionAttributeValues={
            ':inc': 1
        },
        ReturnValues="UPDATED_NEW"
    )
    return {
        'statusCode': 200,
        'body': json.dumps(
            response['Attributes']['viewers'],
            default=lambda x: float(x) if isinstance(x, Decimal) else x
        )
    }
