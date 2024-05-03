output "bucket_name" {
  description = "The name of the bucket"
  value       = aws_s3_bucket.bucket.bucket  # The actual name of the bucket
}

output "bucket_arn" {
  description = "The ARN of the bucket"
  value       = aws_s3_bucket.bucket.arn  # The Amazon Resource Name (ARN) of the bucket
}
