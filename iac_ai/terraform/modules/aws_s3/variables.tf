variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string  # The type of the variable, in this case, a string
}

variable "canonical_id" {
    description = "Canonical User ID of the AWS user"
    type = string
}