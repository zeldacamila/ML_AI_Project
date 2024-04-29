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