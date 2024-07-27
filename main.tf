provider "aws" {
  region = var.aws_region
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/dist"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_lambda_function" "lambda_function" {
  function_name = var.function_name
  role          = aws_iam_role.lambda_role.arn
  handler       = "handler.handler"
  runtime       = "nodejs20.x" # Change to the Node.js runtime version you are using
  filename      = data.archive_file.lambda_zip.output_path

  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
}
