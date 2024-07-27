
variable "aws_region" {
  description = "The AWS region to deploy to"
  type        = string
  default     = "ap-southeast-2"
}


variable "function_name" {
  description = "The name of the Lambda function"
  type        = string
  default     = "seed_lambda"
}
