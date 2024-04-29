# Ansible

This project uses Ansible for configuration management and task automation on remote servers.

## Prerequisites

Before running Ansible commands, make sure you have Ansible installed on your control machine. 
It is necessary to install it with linux.
Additionally, you should have an `inventory.yml` file and a `secrets.yml` file properly set up in your project.

## Inventory File

The `inventory.yml` file contains the list of hosts that Ansible will run tasks on. Make sure to update this file with the IP addresses or hostnames of your servers.

## Secrets File

The `secrets.yml` file should contain all sensitive variables, such as SSH keys, passwords, etc. This file should not be added to version control (git) and must be adequately protected.

## Basic Commands

### Ping All Hosts

To verify connectivity with all the hosts defined in your inventory file, run:

```bash
ansible all -m ping -i inventory.yml --extra-vars "@secrets.yml"
```

This command uses Ansible's `ping` module to ping all the hosts, which helps confirm that your control machine can correctly communicate with all of them.

### Execute a Playbook

To execute a playbook and apply the defined configurations to your hosts, use:

```bash
ansible-playbook playbook.yml -i inventory.yml --extra-vars "@secrets.yml"
```

This command will run the `playbook.yml`, applying the configurations and tasks defined to the hosts listed in `inventory.yml` and using the variables defined in `secrets.yml`.

## Additional Notes

- Ensure the `inventory.yml` and `secrets.yml` files are correctly configured and located in the directory from which you run the commands.
- The `--extra-vars` option allows overriding variables defined elsewhere, which is useful for passing secrets or specific environment variables at runtime.

## Contributing

To contribute to this project, please send a pull request or open an issue to discuss the proposed changes.
