```mermaid
stateDiagram-v2
    [*] --> TAG_START
    TAG_START --> TAG_NAME

    TAG_NAME --> ATTR_NAME
    ATTR_NAME --> ATTR_NAME
    ATTR_NAME --> ATTR_VALUE
    ATTR_VALUE --> ATTR_NAME
    ATTR_VALUE --> TAG_CLOSE

    TAG_NAME --> TAG_CLOSE
    TAG_CLOSE --> TEXT
    TEXT --> TEXT
    TEXT --> TAG_START
    
```