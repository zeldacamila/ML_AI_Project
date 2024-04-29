output "ec2_public_ip" {
  value       = module.ec2.public_ip
  description = "The public IP of the EC2 instance"
}

output "rds_postgres_endpoint" {
  value       = module.postgres.db_instance_endpoint
  description = "The connection endpoint for the RDS Postgres instance"
}

output "rds_postgres_address" {
  value       = module.postgres.db_instance_address
  description = "The hostname of the RDS Postgres instance"
}