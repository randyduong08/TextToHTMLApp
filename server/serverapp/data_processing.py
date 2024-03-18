from serverapp.serializers import PromptSerializer
from serverapp.models import Prompt

import logging

# Function to delimit the prompt details from serializer.data
def delimit_prompt_details(prompt_data, prompt_id = -1):    # prompt_data = list of dictionaries
    if prompt_id == -1:                                     # if prompt_id is not given, assume prompt_data is only 1 dictionary
        prompt_details = prompt_data['promptDetails']       # get the prompt details from the prompt
        tokens = prompt_details.split("\n\n")                 # split the prompt details into tokens
        if len(tokens) == 1:                                # if there is only 1 token
            tokens.append("")                                  # add 2 empty tokens
            tokens.append("") 
        elif len(tokens) == 2:                              # if there are only 2 tokens
            tokens.append("")                                  # add 1 empty token   
        return tokens
    else:                                                   # if prompt_id is given, assume prompt_data is a list of dictionaries
        prompt = get_prompt_by_id(prompt_data, prompt_id)   # get the prompt with the given prompt_id
        prompt_details = prompt['promptDetails']            # get the prompt details from the prompt
        tokens = prompt_details.split("\n\n")                 # split the prompt details into tokens
        return tokens

# Function to get the prompt by prompt_id
def get_prompt_by_id(prompt_data, prompt_id):
    for prompt in prompt_data:                  # iterate through the prompt data
        logging.debug(type(prompt), prompt)
        if prompt['promptID'] == prompt_id:     # if the promptID matches the prompt_id
            return prompt                       # return the prompt (is a dictionary)             
    return None                                 # if (somehow) no prompt with id=prompt_id is found

# Test functionality below
# # fetch prompts from the database using Prompt model
# prompts = Prompt.objects.all()

# # serialize the data
# serializer = PromptSerializer(prompts, many=True)

# # store the serialized prompt data from the serializer
# serialized_prompt_data = serializer.data

# # use the delimit_prompt_details function to delimit prompt with promptID = 1
# prompt_tokens = delimit_prompt_details(serialized_prompt_data, 1)