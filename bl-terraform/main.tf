terraform {
    required_providers {
        azurerm = {
            source = "hashicorp/azurerm"
        }
    }
}

provider "azurerm" {
    features {}
}

resource "azurerm_resource_group" "dvopsResourceGroup" {
    name = "dvopsResourceGroup"
    location = "East US"
}

resource "azurerm_kubernetes_cluster" "dvopsAKSCluster" {
    name = "dvopsAKSCluster"
    location = azurerm_resource_group.dvopsResourceGroup.location
    resource_group_name = azurerm_resource_group.dvopsResourceGroup.name
    dns_prefix = "bl-aks"

    default_node_pool {
        name = "default"
        node_count = 1
        vm_size = "Standard_DS2_v2"
    }

    service_principal {
        client_id = "ba69b273-4aee-45d6-9726-8121645e37d4"
        client_secret = "xbH8Q~PYKbWk2Y5Hn15h-m0MCHCsJjBIA1E6HabB"
    }
}