
# SECURITY GROUP FOR RDS POSTGRES DATABASE

resource "aws_security_group" "rds_postgres" {
  name = "rds-postgres"

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

}



# RDS POSTGRES DATABASE

resource "aws_db_instance" "postgres" {
  engine            = "postgres"
  engine_version    = "16.1"
  instance_class    = "db.t3.micro"
  allocated_storage = 20
  storage_type      = "gp2"
  identifier        = "ml-project-db"
  db_name           = var.db_name


  username = var.username
  password = var.password

  skip_final_snapshot          = true
  multi_az                     = false
  backup_retention_period      = 0
  delete_automated_backups     = true
  publicly_accessible          = true
  performance_insights_enabled = false

  vpc_security_group_ids = [aws_security_group.rds_postgres.id]


  tags = {
    project = var.project_name
  }


}