# EC2

module "ec2" {
  source       = "./modules/aws_ec2"
  project_name = var.project_name
  key_name     = var.key_name
}

module "postgres" {
  source       = "./modules/aws_rds_postgres"
  project_name = var.project_name
  username     = var.db_username
  password     = var.db_password
  db_name = var.db_name
}

module "s3" {
  source = "./modules/aws_s3"
  bucket_name = var.bucket_name
  canonical_id = var.canonical_id
}