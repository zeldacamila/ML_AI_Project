resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name  # The name of the S3 bucket
  acl    = "private"  # The access control list policy for the bucket

  versioning {
    enabled = true  # Enables versioning to keep multiple versions of an object in the bucket
  }
  tags = {
    Name        = "Bucker for model"
    Environment = "Dev"
  }
}