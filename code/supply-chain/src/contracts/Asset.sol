pragma solidity ^0.5.0;

contract Asset {
  string public name;
  address public keeper;
  STATUSES public status;

  enum STATUSES {
    CREATED,
    SENT,
    RECEIVED
  }

  event Action(
    string name,
    address account,
    address keeper,
    uint timestamp
  );

  constructor(string memory _name) public {
    name = _name;

    keeper = msg.sender;

    status = STATUSES.CREATED;

    emit Action("CREATE", msg.sender, msg.sender, now);
  }

  function send(address _to) public {
    require(msg.sender == keeper);
    require(_to != keeper);
    require(status != STATUSES.SENT);

    status = STATUSES.SENT;

    keeper = _to;

    emit Action("SEND", msg.sender, _to, now);
  }

  function receive() public {
    require(msg.sender == keeper);
    require(status == STATUSES.SENT);

    status = STATUSES.RECEIVED;

    emit Action("RECEIVE", msg.sender, msg.sender, now);
  }
}
